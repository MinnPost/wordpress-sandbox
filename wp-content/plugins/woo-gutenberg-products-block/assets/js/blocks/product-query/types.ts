/**
 * External dependencies
 */
import type {
	AttributeSetting,
	AttributeTerm,
	EditorBlock,
} from '@woocommerce/types';

export interface AttributeMetadata {
	taxonomy: string;
	termId: number;
}

export type AttributeWithTerms = AttributeSetting & { terms: AttributeTerm[] };

// The interface below disables the forbidden underscores
// naming convention because we are namespacing our
// custom attributes inside a core block. Prefixing with underscores
// will help signify our intentions.
/* eslint-disable @typescript-eslint/naming-convention */
export interface ProductQueryArguments {
	/**
	 * Available sorting options specific to the Product Query block
	 *
	 * Other sorting options may be possible, but we are restricting
	 * the choice to those.
	 */
	orderBy: 'date' | 'popularity';
	__woocommerceAttributes?: AttributeMetadata[];
	/**
	 * Display only products on sale.
	 *
	 * Will generate the following `meta_query`:
	 *
	 * ```
	 * array(
	 *   'relation' => 'OR',
	 *   array( // Simple products type
	 *     'key'     => '_sale_price',
	 *     'value'   => 0,
	 *     'compare' => '>',
	 *     'type'    => 'numeric',
	 *   ),
	 *   array( // Variable products type
	 *     'key'     => '_min_variation_sale_price',
	 *     'value'   => 0,
	 *     'compare' => '>',
	 *     'type'    => 'numeric',
	 *   ),
	 * )
	 * ```
	 */
	__woocommerceOnSale?: boolean;
	__woocommerceInherit?: boolean;
	/**
	 * Filter products by their stock status.
	 *
	 * Will generate the following `meta_query`:
	 *
	 * ```
	 * array(
	 *   'key'     => '_stock_status',
	 *   'value'   => (array) $stock_statii,
	 *   'compare' => 'IN',
	 * ),
	 * ```
	 */
	__woocommerceStockStatus?: string[];
}
/* eslint-enable */

export type ProductQueryBlock = EditorBlock< QueryBlockAttributes >;

export type ProductQueryBlockQuery = Omit<
	QueryBlockQuery,
	keyof ProductQueryArguments
> &
	ProductQueryArguments;

export interface QueryBlockAttributes {
	allowedControls?: string[];
	displayLayout?: {
		type: 'flex' | 'list';
		columns?: number;
	};
	namespace?: string;
	query: ProductQueryBlockQuery;
}

export interface QueryBlockQuery {
	author?: string;
	exclude?: string[];
	inherit: boolean;
	offset?: number;
	order: 'asc' | 'desc';
	orderBy: 'date' | 'relevance';
	pages?: number;
	parents?: number[];
	perPage?: number;
	postType: string;
	search?: string;
	sticky?: string;
	taxQuery?: string;
}

export interface ProductQueryContext {
	query?: ProductQueryBlockQuery;
	queryId?: number;
}

export enum QueryVariation {
	/** The main, fully customizable, Product Query block */
	PRODUCT_QUERY = 'woocommerce/product-query',
	/** Only shows products on sale */
	PRODUCTS_ON_SALE = 'woocommerce/query-products-on-sale',
}
