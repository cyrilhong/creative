import * as colors from 'styles/colors';
import { useParallax } from 'react-scroll-parallax';
import { useWindowSize } from '../../hooks'
export function Mark(props) {
    const windowWidth = useWindowSize().width
    const { ref } = useParallax<HTMLDivElement>({
        scaleX: [0, 1],
        rootMargin: { top: 0, right: 0, bottom: -600, left: 0 },
    });
    const color = props.color ? props.color : colors.ElectricBlue;
    return (
        <span style={{ height: windowWidth > 960 ? 'auto' : '24px', display: windowWidth > 960 ? 'inline-block' : 'inline-block' }}>
            <div style={{ zIndex: 1, position: 'relative' }}>{props.children}</div>
            <span
                style={{
                    position: 'relative',
                    display: 'block',
                    bottom: '30px',
                    height: '24px',
                    backgroundColor: color,
                    zIndex: 0,
                    transformOrigin: 'left',
                }}
                ref={ref}
            ></span>
        </span>
    );
}

