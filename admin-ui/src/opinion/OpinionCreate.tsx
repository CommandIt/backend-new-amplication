import * as React from "react";

import {
  Create,
  SimpleForm,
  CreateProps,
  DateTimeInput,
  NumberInput,
  ReferenceInput,
  SelectInput,
} from "react-admin";

import { SoldierTitle } from "../soldier/SoldierTitle";

export const OpinionCreate = (props: CreateProps): React.ReactElement => {
  return (
    <Create {...props}>
      <SimpleForm>
        <DateTimeInput label="Date" source="date" />
        <NumberInput label="Energy" source="energy" />
        <NumberInput label="Positivity" source="positivity" />
        <NumberInput label="Productivity" source="productivity" />
        <ReferenceInput source="soldier.id" reference="Soldier" label="Soldier">
          <SelectInput optionText={SoldierTitle} />
        </ReferenceInput>
        <div />
      </SimpleForm>
    </Create>
  );
};
