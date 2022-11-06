const Input = ({ type, placeholder, name, label, onChange }) => {
  return (
    <div className="flex flex-col gap-y-1">
      <label>
        <span className="text-2 text-primary_super">{label}:</span>
      </label>

      <input
        placeholder={placeholder}
        type={type}
        name={name}
        onChange={onChange}
        className="w-33 h-[3.8rem] sm:w-53 sm:h-9 rounded-full text-primary_super border border-primary_super active:border-white px-4"
      ></input>
    </div>
  );
};

export default Input;
