/**
 * React Store Init
 *
 * Ghostery Browser Extension
 * https://www.ghostery.com/
 *
 * Copyright 2019 Ghostery, Inc. All rights reserved.
 *
 * This Source Code Form is subject to the terms of the Mozilla Public
 * License, v. 2.0. If a copy of the MPL was not distributed with this
 * file, You can obtain one at http://mozilla.org/MPL/2.0
 *
 * @namespace HubReactStore
 */

import {
	applyMiddleware,
	compose,
	combineReducers,
	createStore
} from 'redux';
import thunk from 'redux-thunk';

import { reducer as app } from './Views/AppView';
import { reducer as home } from './Views/HomeView';
import { reducer as setup } from './Views/SetupView';
import { reducer as tutorial } from './Views/TutorialView';
import { reducer as upgrade } from './Views/UpgradePlanView';
import account from '../Account/AccountReducer';
import settings from '../panel/reducers/settings';

const reducer = combineReducers({
	app,
	home,
	setup,
	tutorial,
	account,
	settings,
	upgrade
});

/**
 * Build store using combined reducers and middleware
 * @return {Object}
 * @memberof HubReactStore
 */
export default function() {
	return createStore(
		reducer,
		compose(
			applyMiddleware(thunk),
			window.devToolsExtension ? window.devToolsExtension() : f => f
		),
	);
}
