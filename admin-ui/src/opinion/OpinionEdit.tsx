import * as React from "react";

import {
  Edit,
  SimpleForm,
  EditProps,
  DateTimeInput,
  NumberInput,
  ReferenceInput,
  SelectInput,
} from "react-admin";

import { SoldierTitle } from "../soldier/SoldierTitle";

export const OpinionEdit = (props: EditProps): React.ReactElement => {
  return (
    <Edit {...props}>
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
    </Edit>
  );
};
