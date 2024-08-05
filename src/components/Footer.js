import { useTheme } from './ThemeContext';

export default function Footer() {

    const { theme, toggleTheme } = useTheme();

    return (
        <div className={`footer w-100 ${theme}`}>
            <h2 className="text-center">Follow us on Instagram</h2>
            <h6 className="text-center">@photographer_37</h6>
            <div className="d-flex align-items-center justify-content-around">
                <p>
                    Copyright ©2024 All rights reserved | Template is made by Shivani Katakam
                </p>
                <img src="https://preview.colorlib.com/theme/alime/img/core-img/logo.png" />
                <div className="social-info">
                    <img src="https://i.pinimg.com/originals/ee/93/32/ee933267f1290803739dd38bca4a9b25.jpg" />
                    <img src="https://static-00.iconduck.com/assets.00/twitter-icon-2048x1691-4lpbyo0r.png" />
                    <img src="https://banner2.cleanpng.com/20180518/yk/avraxewhx.webp" />
                </div>
            </div>
        </div>
    )
}