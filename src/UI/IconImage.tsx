interface IProps {
    src: string;
    variant: string;
}

const IconImage = ({ src, variant: variant }: IProps) => {
    return (
        <img src={src} alt="icons" className={variant} />
    );
}

export default IconImage;
