import Select from "react-select";

type SDGFilterProps = {
  setSelectedTopics: (topics: string[]) => void;
  topicOptions: { value: string; label: string }[];
  customLabelText?: string;
};

export const SDGFilter = ({ setSelectedTopics, topicOptions, customLabelText }: SDGFilterProps) => {
  return (
    <>
      <div>
        <label className="label">{customLabelText || "Sustainable Development Goal (SDG)"}</label>
        <Select
          isMulti
          className=""
          options={topicOptions}
          getOptionLabel={(option) => option.label}
          getOptionValue={(option) => option.value ?? ""}
          onChange={(selectedOptions) =>
            setSelectedTopics(selectedOptions.map((option) => option.value ?? ""))
          }
        />
      </div>
    </>
  );
};
