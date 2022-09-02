import * as React from "react";

import {
  Create,
  SimpleForm,
  CreateProps,
  NumberInput,
  ReferenceInput,
  SelectInput,
  TextInput,
} from "react-admin";

import { SoliderTitle } from "../solider/SoliderTitle";

export const OpinionCreate = (props: CreateProps): React.ReactElement => {
  return (
    <Create {...props}>
      <SimpleForm>
        <NumberInput label="Energy" source="energy" />
        <NumberInput label="Positivity" source="positivity" />
        <NumberInput label="Productivity" source="productivity" />
        <ReferenceInput source="solider.id" reference="Solider" label="Solider">
          <SelectInput optionText={SoliderTitle} />
        </ReferenceInput>
        <TextInput label="Text" source="text" />
      </SimpleForm>
    </Create>
  );
};
