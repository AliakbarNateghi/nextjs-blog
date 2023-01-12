import Image from 'next/image';
import Link from 'next/link';
import linus from '../../assets/images/linus.png';

export default function Second () {
    return (
        <div>
            <Image 
                src={ linus }
                alt="linus torvalds"
                height={144}
                max-width={288} 
            />

            <h2>
                <Link href="/" >HOME</Link>
            </h2>
            
        </div>
    )
}