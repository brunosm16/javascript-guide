let content = {
  text: "fake_text",
  links: ["fake-link.com"],
};

let campaign = {
  name: "fake_campaign",
  // overrides
  text: "fake_text_campaign",
  links: ["fake-link-campaign"],
};

let renderedCampaign = {
  ...content,
  ...campaign,
};

console.log(renderedCampaign);

// obj inherits date and it's not his own property
let obj = Object.create({ date: new Date() });

// undefine, because obj already inherits date and date is not a own
// property from obj
let obj2 = { ...obj };

console.log(obj2);
