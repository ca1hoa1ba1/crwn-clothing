import React from "react";
import { Route } from "react-router-dom";
import { connect } from "react-redux";

import { fetchCollectionsStartAsync } from "./../../redux/shop/shop.action";

import CollectionsOverviewContainer from "./../../components/collection-overview/collections-overview.container";
import CollectionsContainer from "./../../pages/collection/collection.container";

class ShopPage extends React.Component {
  state = {
    isLoading: true
  };
  unsubscribeFromAuth = null;

  componentDidMount() {
    // const collectionRef = firestore.collection("collections");
    // observer pattern
    // this.unsubscribeFromAuth = collectionRef.onSnapshot(snapShotCollections => {
    //   const collectionsMap = convertCollectionsSnapshotToMap(
    //     snapShotCollections
    //   );
    //   updateCollections(collectionsMap);
    //   this.setState({ isLoading: false });
    // });
    // Bad pratice cuz it will call api every mount component - promise pattern
    // collectionRef.get().then(snapShotCollections => {
    //   const collectionsMap = convertCollectionsSnapshotToMap(
    //     snapShotCollections
    //   );
    //   updateCollections(collectionsMap);
    //   this.setState({ isLoading: false });
    // });
    const { fetchCollectionsStartAsync } = this.props;
    fetchCollectionsStartAsync();
  }

  render() {
    const { match } = this.props;
    return (
      <div className="shop-page">
        <Route
          exact
          path={`${match.path}`}
          component={CollectionsOverviewContainer}
        />
        <Route
          path={`${match.path}/:collectionId`}
          component={CollectionsContainer}
        />
      </div>
    );
  }
}

const mapDispatchToProp = dispatch => ({
  fetchCollectionsStartAsync: () => dispatch(fetchCollectionsStartAsync())
});

export default connect(
  null,
  mapDispatchToProp
)(ShopPage);
