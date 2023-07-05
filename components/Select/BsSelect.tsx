interface BsSelectProps {
  isDisabled?: boolean;
  label: string;
  onChange?: () => void;
}

/**
 * Primary UI component for user interaction
 */
export const BsSelect = ({
  isDisabled = false,
  label,
  onChange,
  ...props
}: BsSelectProps) => {
  const locationOptions = [
    { value: "tr", option: "Türkçe" },
    { value: "en", option: "İngilizce" },
  ];

  return (
    <div className="relative h-[62px] min-w-[200px]">
      <select
        className="peer h-full w-full border-0 focus:border-transparent focus:ring-0 border-b border-gray400 bg-transparent pt-4 pl-0 pb-1.5 font-sans text-base font-semibold text-baseBlack outline outline-0 transition-all placeholder-shown:border placeholder-shown:border-gray300 placeholder-shown:border-t-blue-gray-200 empty:!bg-primary focus:border-2 focus:border-pink-500 focus:outline-0 disabled:border-gray-100 disabled:text-gray-300"
        disabled={isDisabled}
        onChange={onChange}
      >
        {locationOptions.map((location) => {
          return (
            <option key={location.value} value={location.value}>
              {location.option}
            </option>
          );
        })}
      </select>
      <label
        className="after:content[' '] pointer-events-none absolute left-0 -top-1.5 flex h-full w-full 
          select-none text-[12px] font-normal leading-tight text-gray300 transition-all after:absolute after:-bottom-1.5 
          after:block after:w-full after:scale-x-0 after:border-b-2 after:border-gray300 after:transition-transform after:duration-300 
          peer-placeholder-shown:text-base peer-placeholder-shown:leading-[4.25] peer-placeholder-shown:text-blue-gray-500 peer-focus:text-[12px] 
          peer-focus:leading-tight peer-focus:text-gray200 peer-focus:after:scale-x-100 peer-focus:after:border-gray300 peer:focus-visible:text-[12px] 
          peer-disabled:text-transparent peer-disabled:peer-placeholder-shown:text-gray-300 peer-disabled:focus:text-base"
      >
        {label}
      </label>
    </div>
  );
};
