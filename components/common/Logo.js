const Logo = ({variant = 'one', fillTextColor = '#00004B'}) => {
    return (
        <svg width="281px" height="60px" viewBox="0 0 281 60" version="1.1">
            <title>Logo</title>
            <desc>Created with Sketch.</desc>
            <g id="Symbols"
               stroke="none"
               strokeWidth="1"
               fill="none"
               fillRule="evenodd">
                <g transform="translate(-315.000000, -40.000000)">
                    <g>
                        <g id="logo" transform="translate(315.000000, 40.000000)">
                            <text id="Keystroke-Startup-la"
                                  fontFamily="DMSans-Bold, DM Sans"
                                  fontSize="20"
                                  fontWeight="bold"
                                  fill={fillTextColor}>
                                <tspan x="75" y="24">Keystroke</tspan>
                                <tspan
                                    x="175.14" y="24.5001221"
                                    fontFamily="DMSans-Regular, DM Sans"
                                    fontWeight="normal"
                                />
                                <tspan
                                    x="76.16" y="49.5001221"
                                    fontFamily="DMSans-Regular, DM Sans"
                                    fontSize="18"
                                    fontWeight="normal">
                                    {variant === 'two' ? 'Small agency studio' : 'Startup template'}
                                </tspan>
                            </text>
                            <g id="Favicon">
                                <rect
                                    id="Base"
                                    fill={variant === 'two' ? '#ff8a5b' : '#702fff'}
                                    x="0" y="0"
                                    width="60"
                                    height="60"
                                    rx="14"
                                />
                                <g id="Group-3"
                                   transform="translate(15.000000, 11.000000)">
                                    <circle
                                        id="icon-oval-lg"
                                        className="icon-oval-lg"
                                        stroke="#fff"
                                        strokeWidth="7"
                                        cx="15"
                                        cy="15"
                                        r="11.5"
                                    />
                                    <circle
                                        id="icon-oval-sm"
                                        className="icon-oval-sm"
                                        fill="#fff"
                                        cx="4"
                                        cy="34"
                                        r="4"
                                    />
                                </g>
                            </g>
                        </g>
                    </g>
                </g>
            </g>
        </svg>
    )
}

export default Logo;