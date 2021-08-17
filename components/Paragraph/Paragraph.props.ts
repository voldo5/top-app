import { DetailedHTMLProps, HTMLAttributes, ReactNode } from 'react';

// import { ButtonHTMLAttributes, DetailedHTMLProps,
// 	 HTMLAttributes, ReactNode } from 'react';

export interface ParagraphProps
 extends DetailedHTMLProps<HTMLAttributes<HTMLParagraphElement>, HTMLParagraphElement> {
	children: ReactNode;
	fontSize?: 's' | 'm' | 'l';	
} 

//p: DetailedHTMLFactory<HTMLAttributes<HTMLParagraphElement>, HTMLParagraphElement>;
//extends DetailedHTMLProps<ButtonHTMLAttributes<HTMLButtonElement>, HTMLButtonElement> {