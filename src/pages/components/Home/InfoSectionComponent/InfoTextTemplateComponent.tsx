import { Flex, FlexProps, Stack, Text } from '@chakra-ui/react';
import { ReactNode } from 'react';

type Props = {
	title: string;
	children?: ReactNode;
	flexDir?: FlexProps['flexDirection'];
};

const InfoTextTemplateComponent = (props: Props) => {
	return (
		<Stack gap='15px'>
			<Text fontSize='24px' fontWeight={700}>
				{props.title}
			</Text>
			<Flex
				color={'brand.purple.900'}
				alignItems='center'
				gap={2}
				flexDir={props.flexDir}
			>
				{props.children}
			</Flex>
		</Stack>
	);
};

export default InfoTextTemplateComponent;
