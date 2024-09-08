
interface ButtonProps {
  btnText: string;
  size?: 'small' | 'medium' | 'large' | 'block';
  btnWasClicked:() => void;
}

const Button: React.FC<ButtonProps> = ({ size = 'medium', btnText, btnWasClicked }) => {
  const sizeClasses = {
    small: 'py-1 px-4 text-sm',
    medium: 'py-2 px-8 text-base',
    large: 'py-3 px-12 text-lg',
    block:'w-full'
  };
  return (
    <button onClick={btnWasClicked} className={`${sizeClasses[size]} py-2 px-8 bg-primary text-white font-semibold rounded-lg shadow-md hover:bg-darkenPrimary hover:shadow-lg transition duration-300 ease-in-out`}>{ btnText }</button>
  )
}

export default Button