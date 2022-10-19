import { ActionIcon, Group, Text, TextInput } from "@mantine/core";
import { UseFormReturnType } from "@mantine/form/lib/types";

import type { FC } from "react";
import React from "react";
import { Trash } from "tabler-icons-react";

type FAQRepeaterProps = {
  form: UseFormReturnType<any>;
  label: string;
  question: string;
  answere: string;
  action: any;
  name?: string;
};

const FAQRepeaterComponent: FC<FAQRepeaterProps> = ({
  form,
  label,
  question,
  answere,
  action,
  name,
}) => {
  const FAQs = form.values.projectFAQs.map((item : any , index: number) => (
    <div key={`faq-items-${index}`} className="mb-6 flex flex-col space-y-2">
      <div className="relative flex">
        <TextInput
          placeholder={question}
          required
          sx={{ flex: 1 }}
          {...form.getInputProps(`projectFAQs.${index}.question`)}
        />

        <div className="absolute right-1 top-1">
          <ActionIcon
            color="red"
            onClick={() => {
              form.removeListItem("projectFAQs", index);
            }}
          >
            <Trash size={16} />
          </ActionIcon>
        </div>
      </div>
      <TextInput
        placeholder={answere}
        required
        withAsterisk
        sx={{ flex: 1 }}
        {...form.getInputProps(`projectFAQs.${index}.answer`)}
      />
    </div>
  ));
  return (
    <div>
      {FAQs.length > 0 ? (
        <Group mb="xs" mt="md">
          <Text weight={500} size="sm" sx={{ flex: 1 }}>
            {label}
          </Text>
        </Group>
      ) : (
        <Text color="dimmed" mt="md" align="center">
          Please add FAQs for the Raffle
        </Text>
      )}

      {FAQs}

      <Group mt="md">
        <button
          type="button"
          className="rounded-md bg-[#34354a] py-2 px-4 text-white shadow-md"
          onClick={() => {
            console.log({ FormValues: form.values.projectFAQs });
            form.insertListItem("projectFAQs", {
              question: "",
              answer: "",
            });
          }}
        >
          {action}
        </button>
      </Group>
    </div>
  );
};

export default FAQRepeaterComponent;
