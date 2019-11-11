import * as paths from './state-paths';
import { uiConstants } from './constants';

// Everything
export const getState = state => state;

//-- Pod meta
export const getPodName = state => {
	return paths.POD_NAME.getFrom( state );
};

export const getPodMetaValue = ( state, key ) => {
	return paths.POD_META.getFrom( state )[ key ];
};

//-- Tabs
export const getActiveTab = state => paths.ACTIVE_TAB.getFrom( state );

export const getTab = ( state, tabName ) =>
	paths.TABS_BY_NAME.getFrom( state )[ tabName ];

export const getTabList = state =>
	paths.TAB_LIST.getFrom( state );

export const getTabs = state =>
	getTabList( state ).map( tabName => getTab( state, tabName ) );

export const getTabOptionsList = ( state, tabName ) =>
	paths.TAB_OPTIONS_LIST.getFrom( state )[ tabName ];

export const getTabOptions = ( state, tabName ) => {
	return getTabOptionsList( state, tabName ).map(
		optionName => getOption( state, optionName )
	);
};

//-- Save status
export const getSaveStatus = state => paths.SAVE_STATUS.getFrom( state );

export const isSaving = state =>
	paths.SAVE_STATUS.getFrom( state ) === uiConstants.saveStatuses.SAVING;

//-- Options
export const getOption = ( state, optionName ) =>
	paths.OPTIONS.getFrom( state )[ optionName ];

export const getOptionItemValue = ( state, optionName, itemName ) =>
	paths.OPTIONS.getFrom( state )[ optionName ][ itemName ];

export const getOptionValue = ( state, optionName ) =>
	paths.OPTIONS.getFrom( state )[ optionName ].value;

//-- Groups
export const getGroupList = state =>
	paths.GROUP_LIST.getFrom( state );

export const getGroup = ( state, groupName ) =>
	paths.GROUPS_BY_NAME.getFrom( state )[ groupName ];

export const getGroups = state =>
	getGroupList( state ).map( groupName => getGroup( state, groupName ) );

export const getFieldList = ( state, groupName ) =>
	paths.GROUP_FIELD_LIST.getFrom( state )[ groupName ];

export const getGroupFields = ( state, groupName ) =>
	getFieldList( state, groupName ).map( fieldName => getField( state, fieldName ) );

//-- Fields
export const getFields = state => paths.FIELDS.getFrom( state );
export const getField = ( state, fieldName ) => getFields( state )[ fieldName ];