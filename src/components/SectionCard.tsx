import {Card, CardContent, CardHeader, CardTitle} from "@/components/ui/card.tsx";
import {ReactNode} from "react";


export const SectionCard = ({title, children, className, extra}: {title?: ReactNode; children: ReactNode; className?: string; extra?: ReactNode}) => {
    return (
        <Card className={className}>
            {
                title && (
                    <CardHeader className={'flex flex-row justify-center items-center'}>
                        <CardTitle className={'text-center'}>{title}</CardTitle>
                        {extra}
                    </CardHeader>
                )
            }
            <CardContent>
                {children}
            </CardContent>
        </Card>
    )
}