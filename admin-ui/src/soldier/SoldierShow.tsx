import * as React from "react";

import {
  Show,
  SimpleShowLayout,
  ShowProps,
  DateField,
  TextField,
  ReferenceField,
  ReferenceManyField,
  Datagrid,
} from "react-admin";

import { SOLDIER_TITLE_FIELD } from "./SoldierTitle";
import { TEAM_TITLE_FIELD } from "../team/TeamTitle";

export const SoldierShow = (props: ShowProps): React.ReactElement => {
  return (
    <Show {...props}>
      <SimpleShowLayout>
        <DateField source="createdAt" label="Created At" />
        <TextField label="Description" source="description" />
        <TextField label="ID" source="id" />
        <TextField label="Name" source="name" />
        <ReferenceField label="Team" source="team.id" reference="Team">
          <TextField source={TEAM_TITLE_FIELD} />
        </ReferenceField>
        <DateField source="updatedAt" label="Updated At" />
        <ReferenceManyField
          reference="Opinion"
          target="SoldierId"
          label="Opinions"
        >
          <Datagrid rowClick="show">
            <DateField source="createdAt" label="Created At" />
            <TextField label="Date" source="date" />
            <TextField label="Energy" source="energy" />
            <TextField label="ID" source="id" />
            <TextField label="Positivity" source="positivity" />
            <TextField label="Productivity" source="productivity" />
            <ReferenceField
              label="Soldier"
              source="soldier.id"
              reference="Soldier"
            >
              <TextField source={SOLDIER_TITLE_FIELD} />
            </ReferenceField>
            <TextField label="Text" source="text" />
            <DateField source="updatedAt" label="Updated At" />
          </Datagrid>
        </ReferenceManyField>
      </SimpleShowLayout>
    </Show>
  );
};
