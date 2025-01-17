import {
	Flex,
	Text,
	Stack,
	Link,
	Divider,
	Button,
	useColorModeValue,
} from '@chakra-ui/react';
import { Fragment } from 'react';

type Props = {
	onClick: () => void;
	onClose: () => void;
};

const ReceiptModalUnmint = (props: Props) => {
	const boxcolor = useColorModeValue('brand.purple.910', 'dark.primaryGray');
	const borderColor = useColorModeValue(
		'light.superLightGray',
		'dark.coolGray',
	);
	return (
		<Fragment>
			<Stack gap='10px'>
				<Text
					fontSize='24px'
					lineHeight='32px'
					fontWeight={500}
					variant='secondary'
					p='12px'
					textAlign='center'
				>
					Initiate unminting tBTC
				</Text>
				<Stack p='20px' bg={boxcolor} gap='16px' borderRadius='10px'>
					<Text
						fontSize='24px'
						lineHeight='32px'
						fontWeight={500}
						variant='secondary'
					>
						Through unminting you will get back ~ 1.25 BTC
					</Text>
					<Text
						fontSize='18px'
						lineHeight='28px'
						fontWeight={400}
						variant='gray2'
					>
						Unminting tBTC requires one transaction on your end.
					</Text>
				</Stack>
			</Stack>
			<Stack my='33.5px' px='20px'>
				<Flex justifyContent='space-between'>
					<Text variant='coolGray2' fontSize='14px' lineHeight='20px'>
						Unminted amount
					</Text>
					<Text fontSize='14px' lineHeight='20px'>
						{' '}
						1.25 tBTC
					</Text>
				</Flex>
				<Flex justifyContent='space-between'>
					<Text variant='coolGray2' fontSize='14px' lineHeight='20px'>
						Estimated Ethereum Gas Cost
					</Text>
					<Text fontSize='14px' lineHeight='20px'>
						{' '}
						~50 gWEI
					</Text>
				</Flex>
				<Flex justifyContent='space-between'>
					<Text variant='coolGray2' fontSize='14px' lineHeight='20px'>
						Threshold Network Fee
					</Text>
					<Text fontSize='14px' lineHeight='20px'>
						{' '}
						0.01 BTC
					</Text>
				</Flex>
				<Flex justifyContent='space-between'>
					<Text variant='coolGray2' fontSize='14px' lineHeight='20px'>
						BTC Address
					</Text>
					<Text fontSize='14px' lineHeight='20px'>
						{' '}
						bcAb4...3789
					</Text>
				</Flex>
			</Stack>
			<Stack gap='10px'>
				<Text fontSize='14px' lineHeight='20px' textAlign='center'>
					Read more about the{' '}
					<Text as={Link} variant='purpleDarkGradient'>
						bridge contract.
					</Text>
				</Text>
				<Divider opacity={1} borderColor={borderColor} />
			</Stack>
			<Flex mt='24px' gap='12px' justifyContent='flex-end'>
				<Button variant='grayOutlined2' onClick={props.onClose}>
					Cancel
				</Button>
				<Button variant='purple' onClick={props.onClick}>
					Unmint
				</Button>
			</Flex>
		</Fragment>
	);
};

export default ReceiptModalUnmint;
