import { Box, Stack, Text, useColorMode } from '@chakra-ui/react';

type Props = { time: number; confirmations: number; btc: string };

const ConfirmationsEstimatedComponents = (props: Props) => {
	const { colorMode } = useColorMode();
	return (
		<Stack
			bg={colorMode === 'dark' ? 'dark.focusGray' : 'white'}
			w='134.77px'
			h='146px'
			borderRadius='14px'
			p={colorMode === 'light' ? 0 : '5px'}
			spacing={0}
			boxShadow={colorMode === 'light' ? '0px 1px 2px #00000020' : 'none'}
		>
			<Box
				borderRadius='14px'
				bg={
					colorMode === 'light'
						? 'brand.purple.100'
						: 'dark.primaryGray'
				}
			>
				<Stack py='5px' alignItems='center'>
					<Text
						fontSize='24px'
						fontWeight={500}
						lineHeight='32px'
						variant='darkPurpleGradient'
					>
						{props.time} hour
					</Text>
					<Text
						fontSize='10px'
						fontWeight={400}
						lineHeight='16px'
						variant='darkPurpleGradient'
					>
						+ {props.confirmations} confirmations
					</Text>
				</Stack>
			</Box>
			<Stack alignItems='center' justifyContent='center' h='100%'>
				<Text fontSize='24px' fontWeight={500} lineHeight='32px'>
					{props.btc}
				</Text>
				<Text fontSize='12px' fontWeight={400} lineHeight='16px'>
					BTC
				</Text>
			</Stack>
		</Stack>
	);
};

export default ConfirmationsEstimatedComponents;
