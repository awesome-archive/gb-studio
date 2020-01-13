import l10n from "../helpers/l10n";

export const id = "EVENT_OVERLAY_SHOW";

export const fields = [
  {
    key: "color",
    type: "overlayColor",
    defaultValue: "black"
  },
  {
    key: "x",
    label: l10n("FIELD_X"),
    type: "number",
    min: 0,
    max: 20,
    defaultValue: 0,
    width: "50%"
  },
  {
    key: "y",
    label: l10n("FIELD_Y"),
    type: "number",
    min: 0,
    max: 18,
    defaultValue: 0,
    width: "50%"
  }
];

export const compile = (input, helpers) => {
  const { overlayShow } = helpers;
  overlayShow(input.color, input.x, input.y);
};
