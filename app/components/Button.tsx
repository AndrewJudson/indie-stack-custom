interface ButtonProps {
    text: string;
    onClick: () => void;
}

export default function(props: ButtonProps) {
  const { text, onClick } = props;
  return <button className="mx-5 rounded-md hover:bg-blue-600 bg-mypurple px-2 drop-shadow-md hover:animate-wiggle" onClick={onClick}>{text}</button>;
}