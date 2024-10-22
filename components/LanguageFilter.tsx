import Select from "react-select";

type LanguageFilterProps = {
  setSelectedLanguages: (languages: string[]) => void;
  languageOptions: { value: string; label: string }[];
  customLabelText?: string;
};

export const LanguageFilter = ({ setSelectedLanguages, languageOptions, customLabelText }: LanguageFilterProps) => {
  return (
    <>
      <div>
        <label className="label">{customLabelText || "Language"}</label>
        <Select isMulti closeMenuOnSelect={false} className="" onChange={(selectedOptions) => setSelectedLanguages(selectedOptions.map((option) => option.value))} options={languageOptions} classNamePrefix="select" />
      </div>
    </>

  );
};
