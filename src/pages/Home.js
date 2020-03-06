/**
 * Copyright 2020, SumUp Ltd.
 * Licensed under the Apache License, Version 2.0 (the "License");
 * you may not use this file except in compliance with the License.
 * You may obtain a copy of the License at
 *
 * http://www.apache.org/licenses/LICENSE-2.0
 *
 * Unless required by applicable law or agreed to in writing, software
 * distributed under the License is distributed on an "AS IS" BASIS,
 * WITHOUT WARRANTIES OR CONDITIONS OF ANY KIND, either express or implied.
 * See the License for the specific language governing permissions and
 * limitations under the License.
 */

import React, { useState, useEffect } from 'react';
import ConfigList from '../components/ConfigList/ConfigList';
import { all } from '../services/ConfigService';

const configObjectToList = configs =>
  Object.keys(configs).map(key => [key, JSON.stringify(configs[key])]);

const Home = () => {
  const [configs, setConfigs] = useState([]);

  useEffect(() => {
    const fetchData = async () => {
      const { data } = await all();
      setConfigs(configObjectToList(data));
    };
    fetchData();
  }, []);

  return (
    <>
      <p>Hello</p>
      <ConfigList
        configs={configs}
        onClickConfig={config => console.log(`Config clicked:`, config)}
      />
    </>
  );
};

export default Home;
