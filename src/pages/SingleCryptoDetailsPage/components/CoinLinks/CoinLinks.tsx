import { TbWorld } from 'react-icons/tb';
import { MdForum } from 'react-icons/md';
import { FaGithub } from 'react-icons/fa';
import { IoLogoReddit } from 'react-icons/io5';

import LinkButton from '../../../../components/common/LinkButton';

const CoinLinks = ({ data }) => {
  return (
    <section>
      <p className="text-sm text-gray-600 pt-6 font-bold">Official Links</p>
      <div className="flex gap-4 mt-2">
        <LinkButton
          to={data?.links?.homepage[0]}
          text="Main Homepage"
          icon={<TbWorld size={20} />}
        />

        <LinkButton
          to={data?.links?.official_forum_url[0]}
          text="Official Forum"
          icon={<MdForum size={20} />}
        />

        <LinkButton
          to={data?.links?.repos_url?.github[0]}
          text="GitHub"
          icon={<FaGithub size={20} />}
        />
      </div>

      <div>
        <p className="text-sm text-gray-600 pt-6 font-bold">Socials</p>

        <LinkButton
          to={data?.links?.subreddit_url}
          text="Reddit"
          icon={<IoLogoReddit size={20} />}
        />
      </div>
    </section>
  );
};

export default CoinLinks;
