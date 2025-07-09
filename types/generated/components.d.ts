import type { Schema, Struct } from '@strapi/strapi';

export interface CardMainpageCard extends Struct.ComponentSchema {
  collectionName: 'components_card_mainpage_cards';
  info: {
    displayName: 'MainpageCard';
  };
  attributes: {
    CardHeading: Schema.Attribute.String;
    CardImage: Schema.Attribute.Media<'images' | 'files'>;
    CardList: Schema.Attribute.Blocks;
  };
}

export interface HeadingCaseCardInfoHead extends Struct.ComponentSchema {
  collectionName: 'components_heading_case_card_info_heads';
  info: {
    displayName: 'CaseCardInfoHead';
    icon: 'bold';
  };
  attributes: {
    CaseCardInfoTail: Schema.Attribute.String;
  };
}

export interface LandCardLandPageCard extends Struct.ComponentSchema {
  collectionName: 'components_land_card_land_page_cards';
  info: {
    displayName: 'LandPageCard';
  };
  attributes: {
    CardHead: Schema.Attribute.String;
    CardImage: Schema.Attribute.Media<'images' | 'files'>;
    CardSubHead: Schema.Attribute.Blocks;
  };
}

export interface StoreCardStoreCard extends Struct.ComponentSchema {
  collectionName: 'components_store_card_store_cards';
  info: {
    displayName: 'StoreCard';
  };
  attributes: {
    CardHead: Schema.Attribute.String;
    CardSubHead: Schema.Attribute.Text;
    Section2CardImg: Schema.Attribute.Media<
      'images' | 'files' | 'videos' | 'audios'
    >;
  };
}

declare module '@strapi/strapi' {
  export module Public {
    export interface ComponentSchemas {
      'card.mainpage-card': CardMainpageCard;
      'heading.case-card-info-head': HeadingCaseCardInfoHead;
      'land-card.land-page-card': LandCardLandPageCard;
      'store-card.store-card': StoreCardStoreCard;
    }
  }
}
