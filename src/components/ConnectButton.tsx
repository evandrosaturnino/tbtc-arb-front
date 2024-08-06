import { useEffect, useState } from 'react';
import { Button, Box, Flex, ButtonProps } from '@chakra-ui/react';
import {
	useWeb3Modal,
	useWeb3ModalAccount,
	useWeb3ModalProvider,
} from '@web3modal/ethers/react';
import { ethers } from 'ethers';
import { useDispatch } from 'react-redux';
import { addAccount } from '../redux/reducers/AccountReducer';
import { normalizeNetWorkNames } from '../utils/utils';

const ConnectButton = (props: ButtonProps) => {
	const { address, isConnected } = useWeb3ModalAccount();
	const { walletProvider } = useWeb3ModalProvider();
	const [networkName, setNetWorkName] = useState('');
	const [needRefresh, setNeedRefresh] = useState(true);

	const { open } = useWeb3Modal();

	const dispatch = useDispatch();

	useEffect(() => {
		const getBalance = async () => {
			if (walletProvider && address) {
				const provider = new ethers.BrowserProvider(walletProvider);
				const signer = await provider.getSigner();
				const network = await provider.getNetwork();
				const balanceBigInt = await provider.getBalance(address);
				const ethBalance = ethers.formatEther(balanceBigInt);
				dispatch(addAccount(provider, signer, ethBalance));
				setNeedRefresh(false);
				setNetWorkName(network.name);
			}
		};
		getBalance();
	}, [address, walletProvider, needRefresh, dispatch]);

	const handleConnectWallet = () => {
		!isConnected ? open({ view: 'Connect' }) : open({ view: 'Account' });
	};

	return (
		<Box>
			{!isConnected ? (
				<Button
					{...props}
					variant='purple'
					onClick={handleConnectWallet}
				>
					Connect Wallet
				</Button>
			) : (
				<Flex gap='10px'>
					<Button bg='none' fontSize={{ base: '12px', md: '16px' }}>
						{normalizeNetWorkNames(networkName)}
					</Button>
					<Button
						variant='purple'
						onClick={handleConnectWallet}
						fontSize={{ base: '12px', md: '16px' }}
					>
						{address?.slice(0, 5)}...{address?.slice(-4)}
					</Button>
				</Flex>
			)}
		</Box>
	);
};

export default ConnectButton;
