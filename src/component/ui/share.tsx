import { ToasterContext } from '@/context/toaster';
import dynamic from 'next/dynamic';
import { useContext, useState } from 'react';

const WhatsappShare = dynamic(
    () => import('react-share-kit').then((mod) => mod.WhatsappShare),
    { ssr: false }
);
const FacebookShare = dynamic(
    () => import('react-share-kit').then((mod) => mod.FacebookShare),
    { ssr: false }
);
const TwitterShare = dynamic(
    () => import('react-share-kit').then((mod) => mod.TwitterShare),
    { ssr: false }
);
const TelegramShare = dynamic(
    () => import('react-share-kit').then((mod) => mod.TelegramShare),
    { ssr: false }
);

interface ShareProps {
    url: string
}

interface WhatsAppProps extends ShareProps {
    title: string
    separator?: string
}

export const WhatsApp = ({ url, title, separator = ":: " }: WhatsAppProps) => {
    const [hovered, setHovered] = useState(false);

    return (
        <div
            className={`rounded-md cursor-pointer transition-transform duration-200 ${hovered ? 'transform -translate-y-3' : ''
                }`}
            onMouseEnter={() => setHovered(true)}
            onMouseLeave={() => setHovered(false)}
        >
            <WhatsappShare
                size={38}
                bgColor={hovered ? '#7fffae' : '#25D366'}
                windowHeight={800}
                windowWidth={1020}
                borderRadius={10}
                url={url}
                title={title}
                separator={separator}
            />
        </div>
    );
};

interface FacebookProps extends ShareProps {
    hashtag: string
    quote: string
}

export const Facebook = ({ hashtag, quote, url }: FacebookProps) => {
    const [hovered, setHovered] = useState(false);

    return (
        <div
            className={`rounded-md cursor-pointer transition-transform duration-200 ${hovered ? 'transform -translate-y-3' : ''
                }`}
            onMouseEnter={() => setHovered(true)}
            onMouseLeave={() => setHovered(false)}
        >
            <FacebookShare
                url={url}
                quote={quote}
                hashtag={hashtag}
                size={38}
                bgColor={hovered ? '#84adff' : '#3C5DA1'}
                windowHeight={800}
                windowWidth={1020}
                borderRadius={10}
            />
        </div>
    );
};

interface TwitterProps extends ShareProps {
    title: string
    via: string
    related: string[]
    hashtags: string[]
}

export const Twitter = ({ hashtags, title, via, url, related }: TwitterProps) => {
    const [hovered, setHovered] = useState(false);

    return (
        <div
            className={`rounded-md cursor-pointer transition-transform duration-200 ${hovered ? 'transform -translate-y-3' : ''}`}
            onMouseEnter={() => setHovered(true)}
            onMouseLeave={() => setHovered(false)}
        >
            <TwitterShare
                size={38}
                bgColor={hovered ? '#374151' : '#000'}
                windowHeight={800}
                windowWidth={1020}
                borderRadius={10}
                url={url}
                title={title}
                via={via}
                related={related}
                hashtags={hashtags} />
        </div>
    );
};


export const Telegram = ({ url }: ShareProps) => {
    const [hovered, setHovered] = useState(false);

    return (
        <div
            className={`rounded-md cursor-pointer transition-transform duration-200 ${hovered ? 'transform -translate-y-3' : ''}`}
            onMouseEnter={() => setHovered(true)}
            onMouseLeave={() => setHovered(false)}
        >
            <TelegramShare
                size={38}
                bgColor={hovered ? '#72d7ff' : '#0088CC'}
                windowHeight={800}
                windowWidth={1020}
                borderRadius={10}
                url={url}
            />
        </div>
    );
};

export const ShareLink = ({ link }: { link: string }) => {

    const { setToaster } = useContext(ToasterContext)
    const onCopyLink = async () => {
        try {
            await navigator.clipboard.writeText(link)
            setToaster({ variant: "success", message: "Link berhasil disalin" })
        } catch (error) {
            setToaster({ variant: "danger", message: "Gagal menyalin link" })
        } finally {
            return
        }
    }
    return (
        <svg onClick={onCopyLink} xmlns="http://www.w3.org/2000/svg" width="20" height="20" fill="white" className="bi bi-share-fill w-9 h-9 p-1 bg-[#95D03A] hover:bg-[#aada63] rounded-md cursor-pointer hover:-translate-y-3 hover:transform hover:transition duration-300 " strokeWidth={2} viewBox="0 0 16 16">
            <path d="M4.715 6.542 3.343 7.914a3 3 0 1 0 4.243 4.243l1.828-1.829A3 3 0 0 0 8.586 5.5L8 6.086a1 1 0 0 0-.154.199 2 2 0 0 1 .861 3.337L6.88 11.45a2 2 0 1 1-2.83-2.83l.793-.792a4 4 0 0 1-.128-1.287z" />
            <path d="M6.586 4.672A3 3 0 0 0 7.414 9.5l.775-.776a2 2 0 0 1-.896-3.346L9.12 3.55a2 2 0 1 1 2.83 2.83l-.793.792c.112.42.155.855.128 1.287l1.372-1.372a3 3 0 1 0-4.243-4.243z" />
        </svg>
    )
}
