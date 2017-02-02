import React from'react';
import Chai from 'chai';
const TestUtils = require('react-test-utils');

const Expect = Chai.expect();

import  Button from '../../client/js/Components/Button';
import Main from'../js/Components/Main';

describe ('Button component' , function () {

	it(' should render a button that When clicked should submit the input query to the db as a get request',
	 function () {

		const renderer = TestUtils.createRenderer();

		renderer.render('<Button />');

		const result = renderer.getRenderOutput();

		console.log(result);
	});
})