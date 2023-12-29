import I18n from "discourse-i18n";

export function humanizeList(listItems) {
  const items = Array.from(listItems);

  const last = items.pop();

  if (items.length === 0) {
    return last;
  } else {
    return [
      items.join(I18n.t("word_connector.comma")),
      I18n.t("word_connector.last_item"),
      last,
    ].join(" ");
  }
}
