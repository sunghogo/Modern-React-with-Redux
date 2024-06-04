import useNavigation from "../hooks/useNavigation";

function Route({ path, children }) {
  const { currentPath } = useNavigation();

  return path === currentPath ? children : null;
}

export default Route;
