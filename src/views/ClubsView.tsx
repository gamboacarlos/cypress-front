import { useEffect } from 'react';
import ClubsList from '../components/ClubsList';
import FiltersBar from '../components/FiltersBar';
import Layout from '../components/Layout';
import MainSkeleton from '../components/MainSkeleton';
import Paginator from '../components/Paginator';
import useClubsStore from '../hooks/useClubsStore';
import useUIStore from '../hooks/useUIStore';

const ClubsView = () => {
  // Hooks =========================================================================
  const { clubs, dispatchStartClubsFetch } = useClubsStore();
  const { loading, errorMessage } = useUIStore();
  useEffect(() => {
    dispatchStartClubsFetch();
  }, []);

  return (
    <Layout>
      <FiltersBar />
      {loading || errorMessage ? (
        <MainSkeleton loading={loading} message={errorMessage} />
      ) : (
        <ClubsList clubs={clubs} />
      )}
      <Paginator />
    </Layout>
  );
};

export default ClubsView;
