import { link } from 'fs';

interface Tx {
	amount: number;
	address: string;
	time: Date;
}

export interface Contract {
	name: string;
	link: string;
}

export interface Report {
	id: number;
	name: string;
	description: string;
	link: string;
}

export const transactions: Tx[] = [
	{
		amount: 0.02,
		address: '0x1d50c1a394d50f6a7f0d4d3e60c9c24c18d9c24a',
		time: new Date('2024-07-15T12:00:00Z'),
	},
	{
		amount: 0.02,
		address: '0x2d60e2b5a6e60f7b8e1f5e7e70d9c25b29e9d25b',
		time: new Date('2024-07-15T12:20:00Z'),
	},
	{
		amount: 0.02,
		address: '0x3d70f3c6b7f71f8c9f2g6h8f80e9d26c39f9e26c',
		time: new Date('2024-07-15T12:40:00Z'),
	},
	{
		amount: 0.02,
		address: '0x4d80g4d7c8g82g9d0h3h7i9g90f9d27d49g0f27d',
		time: new Date('2024-07-15T13:00:00Z'),
	},
	{
		amount: 0.02,
		address: '0x1d50c1a394d50f6a7f0d4d3e60c9c24c18d9c24a',
		time: new Date('2024-07-15T12:00:00Z'),
	},
	{
		amount: 0.02,
		address: '0x2d60e2b5a6e60f7b8e1f5e7e70d9c25b29e9d25b',
		time: new Date('2024-07-15T12:20:00Z'),
	},
	{
		amount: 0.02,
		address: '0x3d70f3c6b7f71f8c9f2g6h8f80e9d26c39f9e26c',
		time: new Date('2024-07-15T12:40:00Z'),
	},
	{
		amount: 0.02,
		address: '0x4d80g4d7c8g82g9d0h3h7i9g90f9d27d49g0f27d',
		time: new Date('2024-07-15T13:00:00Z'),
	},
];

export const contracts = [
	{
		name: 'Token Contract',
		link: 'https://sepolia.etherscan.io/address/0xE4835Ef9185847d1b7891267f3181172F7B96753#code#F1#L1',
	},
	{
		name: 'Bridge Contract',
		link: 'https://sepolia.etherscan.io/address/0xE4835Ef9185847d1b7891267f3181172F7B96753#code#F18#L1',
	},
];

export const reports = [
	{
		id: 1,
		name: 'Least Authority Report',
		description: 'tBTC Bridge v2 Security',
		link: 'hhtps://google.es',
	},
	{
		id: 2,
		name: 'CertiK Report',
		description: 'Vending Machine Security',
		link: 'hhtps://google.es',
	},
	{
		id: 3,
		name: 'ChainSecurity Report',
		description: 'Staking Contract, T Token, Vending Machine Security',
		link: 'hhtps://google.es',
	},
	{
		id: 4,
		name: 'Mintin service Report',
		description: 'Staking Contract, T Token, Vending Machine Security',
		link: 'hhtps://google.es',
	},
];