import { ReactNode } from "react"

type CardProps = {
    children: ReactNode
}

const ChartCard = ({ children }: CardProps) => {
    return (
        <div className='card'>
            {children}
        </div>
    )
}

export default ChartCard
