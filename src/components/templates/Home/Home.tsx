import {useAppSelector} from '@src/store';
import {useDefaultNavigation} from '@src/navigators/hooks';
import { DefaultButton, DefaultText, TemplateWrapper } from "@src/components";

const Home = () => {
  const {navigate} = useDefaultNavigation();
  const {users} = useAppSelector(state => state.users);

  return (
    <TemplateWrapper>
      <DefaultButton
        title="Users list"
        onPress={() => navigate('Users')}
        containerStyle={{marginBottom: 10}}
      />
      <DefaultButton
        title="Random User"
        onPress={() =>
          navigate('Profile', {
            user: users[Math.floor(Math.random() * users.length)],
          })
        }
        containerStyle={{marginBottom: 10}}
      />
      <DefaultText styleText={{textAlign: 'center', marginVertical: 20}}>
        The features below are not part of the requirements.
      </DefaultText>
      <DefaultButton
        title="Users list with Infinite Scroll"
        onPress={() => navigate('UsersInfiniteScroll')}
        containerStyle={{marginBottom: 10}}
      />
    </TemplateWrapper>
  );
};

export default Home;
