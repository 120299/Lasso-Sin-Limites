import type { Schema, Struct } from '@strapi/strapi';

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
      'layout.title-section': LayoutTitleSection;
    }
  }
}
