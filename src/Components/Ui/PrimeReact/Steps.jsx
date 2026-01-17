
import { Steps } from 'primereact/steps';

export default function InteractiveDemo(
    { activeIndex, setActiveIndex, items = [] }
) {
    return (
        <Steps model={items} activeIndex={activeIndex} onSelect={(e) => setActiveIndex(e.index)} readOnly={false} />
    )
}
