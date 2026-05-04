import type { Schema, Struct } from '@strapi/strapi';

export interface ElemetsLink extends Struct.ComponentSchema {
  collectionName: 'components_elemets_links';
  info: {
    displayName: 'Link';
    icon: 'bulletList';
  };
  attributes: {
    hrf: Schema.Attribute.String & Schema.Attribute.Required;
    label: Schema.Attribute.String & Schema.Attribute.Required;
  };
}

export interface ElemetsListFeature extends Struct.ComponentSchema {
  collectionName: 'components_elemets_list_features';
  info: {
    displayName: 'list-feature';
  };
  attributes: {
    items: Schema.Attribute.Component<'layout.feature', true>;
  };
}

export interface ElemetsListStats extends Struct.ComponentSchema {
  collectionName: 'components_elemets_list_stats';
  info: {
    displayName: 'list-stats';
    icon: 'bulletList';
  };
  attributes: {
    items: Schema.Attribute.Component<'layout.stat', true>;
  };
}

export interface LayoutFeature extends Struct.ComponentSchema {
  collectionName: 'components_layout_features';
  info: {
    displayName: 'Feature';
    icon: 'bulletList';
  };
  attributes: {
    content: Schema.Attribute.Text & Schema.Attribute.Required;
    icon: Schema.Attribute.String & Schema.Attribute.Required;
    title: Schema.Attribute.String & Schema.Attribute.Required;
  };
}

export interface LayoutStat extends Struct.ComponentSchema {
  collectionName: 'components_layout_stats';
  info: {
    displayName: 'Stat';
    icon: 'bulletList';
  };
  attributes: {
    bgColor: Schema.Attribute.String & Schema.Attribute.Required;
    color: Schema.Attribute.String & Schema.Attribute.Required;
    icon: Schema.Attribute.String & Schema.Attribute.Required;
    isDecimal: Schema.Attribute.Boolean;
    label: Schema.Attribute.String & Schema.Attribute.Required;
    prefix: Schema.Attribute.String;
    suffix: Schema.Attribute.String;
    value: Schema.Attribute.Integer & Schema.Attribute.Required;
  };
}

export interface LayoutTitleSection extends Struct.ComponentSchema {
  collectionName: 'components_layout_title_sections';
  info: {
    displayName: 'Title Section';
    icon: 'write';
  };
  attributes: {
    content: Schema.Attribute.String & Schema.Attribute.Required;
    title: Schema.Attribute.String & Schema.Attribute.Required;
  };
}

declare module '@strapi/strapi' {
  export module Public {
    export interface ComponentSchemas {
      'elemets.link': ElemetsLink;
      'elemets.list-feature': ElemetsListFeature;
      'elemets.list-stats': ElemetsListStats;
      'layout.feature': LayoutFeature;
      'layout.stat': LayoutStat;
      'layout.title-section': LayoutTitleSection;
    }
  }
}
