type Props = {
  runFunction: any;
};

function Button({ runFunction }: Props) {
  return (
    <button
      onClick={runFunction}
      className="transition-all duration-300 border border-black px-4 w-full mt-4 py-2 rounded-lg bg-indigo-500 hover:bg-indigo-600 text-white"
    >
      Main button
    </button>
  );
}

export default Button;
