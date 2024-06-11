import { Filters } from './Filters'
import './Footer.css'

export function Footer({filters}) {
    return (
        <footer className="footer">
            {
                JSON.stringify(filters, null, 2)
            }

            {
            /* {<h4>Technical Test React</h4>
            <span>Daniel C</span>
            <h5>Shopping Cart </h5>} */
            }
        </footer>
    )
}