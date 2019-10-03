import { compose } from "redux";
import { connect } from "react-redux";
import { createStructuredSelector } from "reselect";

import { selectIsCollectionLoaded } from "./../../redux/shop/shop.selectors";
import CollectionPage from "./../../pages/collection/collection.component";
import withSpinner from "./../../components/with-spinner/with-spinner.component";

const mapStateToProps = createStructuredSelector({
  isLoading: state => !selectIsCollectionLoaded(state)
});

const CollectionsContainer = compose(
  connect(mapStateToProps),
  withSpinner
)(CollectionPage);

export default CollectionsContainer;
