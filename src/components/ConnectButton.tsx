import { useEffect, useState } from 'react';
import { Button, Box, Flex, ButtonProps } from '@chakra-ui/react';
import {
	useDisconnect,
	useWeb3Modal,
	useWeb3ModalAccount,
	useWeb3ModalProvider,
} from '@web3modal/ethers5/react';
import { ethers } from 'ethers';
import { useDispatch } from 'react-redux';
import { addAccount } from '../redux/reducers/AccountReducer';
import { normalizeNetWorkNames } from '../utils/utils';
import { ArbitrumIcon } from '../assets/icons/ArbitrumIcon';
import { tbtcContractABI } from '../contracts/tbtcContract';

const ConnectButton = (props: ButtonProps) => {
	const { address, isConnected } = useWeb3ModalAccount();
	const { walletProvider } = useWeb3ModalProvider();
	const [networkName, setNetWorkName] = useState('');
	const [needRefresh, setNeedRefresh] = useState(true);
	const { open } = useWeb3Modal();
	const { disconnect } = useDisconnect();
	const dispatch = useDispatch();
	const tbtcAddress = '0xb8f31A249bcb45267d06b9E51252c4793B917Cd0';
	const L1BitcoinDepositor = tbtcContractABI;

	useEffect(() => {
		const getBalance = async () => {
			if (walletProvider && address) {
				const provider = new ethers.providers.Web3Provider(
					walletProvider,
				);
				const signer = await provider.getSigner();
				const tbtcContract = new ethers.Contract(
					tbtcAddress,
					L1BitcoinDepositor,
					signer,
				);
				const tbtcBalance = await tbtcContract.balanceOf(address);
				const tbtcBalanceFormated =
					ethers.utils.formatEther(tbtcBalance);
				const network = await provider.getNetwork();
				const balanceBigInt = await provider.getBalance(address);
				const ethBalance = ethers.utils.formatEther(balanceBigInt);
				dispatch(
					addAccount(
						provider,
						signer,
						ethBalance,
						tbtcBalanceFormated,
					),
				);
				setNeedRefresh(false);
				let networkName = network.name;
				if (networkName === 'unknown') {
					if (network.chainId === 421614) {
						networkName = 'Arbitrum Sepolia';
					}
				}
				setNetWorkName(networkName);

				const handleChainChanged = (chainId: string) => {
					if (chainId.toString() !== '421614') {
						open({ view: 'Networks' });
					}
				};

				(walletProvider as any).on('chainChanged', handleChainChanged);

				// Clean up listeners on component unmount
				return () => {
					if ((walletProvider as any)?.removeListener) {
						(walletProvider as any).removeListener(
							'chainChanged',
							handleChainChanged,
						);
					}
				};
			}
		};

		getBalance();
		// TODO Revisar dependencias
	}, [
		address,
		walletProvider,
		needRefresh,
		dispatch,
		disconnect,
		L1BitcoinDepositor,
		open,
	]);

	const handleConnectWallet = async () => {
		if (!isConnected) {
			await open({ view: 'Connect' });
		} else {
			open({ view: 'Account' });
		}
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
					<Button
						bg='none'
						fontSize={{ base: '12px', md: '16px' }}
						variant='grayOutlined'
						leftIcon={<ArbitrumIcon boxSize='17px' />}
					>
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
