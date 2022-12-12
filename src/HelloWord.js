import { withLDConsumer } from 'launchdarkly-react-client-sdk';
const HelloWord = ({ flags }) => {
    // const isCountry = client.variation('testFlag', true);
    // console.log('==iscountry==', isCountry)

    console.log('==flags==', flags)
    return flags.testFlag ? <div>Flag on</div> : <div>Flag off</div>;
};

export default withLDConsumer()(HelloWord);