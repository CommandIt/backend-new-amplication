import * as React from "react";

import {
  Edit,
  SimpleForm,
  EditProps,
  NumberInput,
  ReferenceInput,
  SelectInput,
  TextInput,
} from "react-admin";

import { SoliderTitle } from "../solider/SoliderTitle";

export const OpinionEdit = (props: EditProps): React.ReactElement => {
  return (
    <Edit {...props}>
      <SimpleForm>
        <NumberInput label="Energy" source="energy" />
        <NumberInput label="Positivity" source="positivity" />
        <NumberInput label="Productivity" source="productivity" />
        <ReferenceInput source="solider.id" reference="Solider" label="Solider">
          <SelectInput optionText={SoliderTitle} />
        </ReferenceInput>
        <TextInput label="Text" source="text" />
      </SimpleForm>
    </Edit>
  );
};
