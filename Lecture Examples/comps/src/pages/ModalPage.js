import { useState } from "react";
import Modal from "../components/Modal";
import Button from "../components/Button";

function ModalPage() {
  const [showModal, setShowModal] = useState(false);

  const handleClick = () => {
    setShowModal(true);
  };

  const handleClose = () => {
    setShowModal(false);
  };

  const actionBar = (
    <div>
      <Button primary onClick={handleClose}>
        I Accept
      </Button>
    </div>
  );
  const modal = (
    <Modal onClose={handleClose} actionBar={actionBar}>
      <p>Here is an important agreement you must accept</p>
    </Modal>
  );

  return (
    <div className="relative">
      <Button primary onClick={handleClick}>
        Open Modal
      </Button>
      {showModal && modal}
      <p>
        Lorem ipsum dolor sit amet, consectetur adipiscing elit. Maecenas
        vestibulum diam vel felis iaculis vehicula. Nunc vel suscipit massa.
        Vestibulum et arcu sagittis, efficitur nulla sed, porta purus. Aenean
        convallis sed tellus in ultrices. Vestibulum varius, tellus posuere
        rutrum pellentesque, ante ligula commodo ante, id blandit metus tellus
        sit amet enim. Cras fermentum vel felis sed pulvinar. Sed consequat
        fermentum nisi sed commodo.
      </p>
      <p>
        Lorem ipsum dolor sit amet, consectetur adipiscing elit. Maecenas
        vestibulum diam vel felis iaculis vehicula. Nunc vel suscipit massa.
        Vestibulum et arcu sagittis, efficitur nulla sed, porta purus. Aenean
        convallis sed tellus in ultrices. Vestibulum varius, tellus posuere
        rutrum pellentesque, ante ligula commodo ante, id blandit metus tellus
        sit amet enim. Cras fermentum vel felis sed pulvinar. Sed consequat
        fermentum nisi sed commodo.
      </p>
      <p>
        Lorem ipsum dolor sit amet, consectetur adipiscing elit. Maecenas
        vestibulum diam vel felis iaculis vehicula. Nunc vel suscipit massa.
        Vestibulum et arcu sagittis, efficitur nulla sed, porta purus. Aenean
        convallis sed tellus in ultrices. Vestibulum varius, tellus posuere
        rutrum pellentesque, ante ligula commodo ante, id blandit metus tellus
        sit amet enim. Cras fermentum vel felis sed pulvinar. Sed consequat
        fermentum nisi sed commodo.
      </p>
      <p>
        Lorem ipsum dolor sit amet, consectetur adipiscing elit. Maecenas
        vestibulum diam vel felis iaculis vehicula. Nunc vel suscipit massa.
        Vestibulum et arcu sagittis, efficitur nulla sed, porta purus. Aenean
        convallis sed tellus in ultrices. Vestibulum varius, tellus posuere
        rutrum pellentesque, ante ligula commodo ante, id blandit metus tellus
        sit amet enim. Cras fermentum vel felis sed pulvinar. Sed consequat
        fermentum nisi sed commodo.
      </p>
      <p>
        Lorem ipsum dolor sit amet, consectetur adipiscing elit. Maecenas
        vestibulum diam vel felis iaculis vehicula. Nunc vel suscipit massa.
        Vestibulum et arcu sagittis, efficitur nulla sed, porta purus. Aenean
        convallis sed tellus in ultrices. Vestibulum varius, tellus posuere
        rutrum pellentesque, ante ligula commodo ante, id blandit metus tellus
        sit amet enim. Cras fermentum vel felis sed pulvinar. Sed consequat
        fermentum nisi sed commodo.
      </p>
      <p>
        Lorem ipsum dolor sit amet, consectetur adipiscing elit. Maecenas
        vestibulum diam vel felis iaculis vehicula. Nunc vel suscipit massa.
        Vestibulum et arcu sagittis, efficitur nulla sed, porta purus. Aenean
        convallis sed tellus in ultrices. Vestibulum varius, tellus posuere
        rutrum pellentesque, ante ligula commodo ante, id blandit metus tellus
        sit amet enim. Cras fermentum vel felis sed pulvinar. Sed consequat
        fermentum nisi sed commodo.
      </p>
      <p>
        Lorem ipsum dolor sit amet, consectetur adipiscing elit. Maecenas
        vestibulum diam vel felis iaculis vehicula. Nunc vel suscipit massa.
        Vestibulum et arcu sagittis, efficitur nulla sed, porta purus. Aenean
        convallis sed tellus in ultrices. Vestibulum varius, tellus posuere
        rutrum pellentesque, ante ligula commodo ante, id blandit metus tellus
        sit amet enim. Cras fermentum vel felis sed pulvinar. Sed consequat
        fermentum nisi sed commodo.
      </p>
    </div>
  );
}

export default ModalPage;
