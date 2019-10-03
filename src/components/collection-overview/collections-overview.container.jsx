import { compose } from "redux";
import { connect } from "react-redux";
import { createStructuredSelector } from "reselect";

import { selectIsCollectionFetching } from "./../../redux/shop/shop.selectors";

import CollectionsOverview from "./../../components/collection-overview/collections-overview.component";

import withSpinner from "./../../components/with-spinner/with-spinner.component";

const mapStateToProps = createStructuredSelector({
  isLoading: selectIsCollectionFetching
});

const CollectionsOverviewContainer = compose(
  connect(mapStateToProps),
  withSpinner
)(CollectionsOverview);

export default CollectionsOverviewContainer;
