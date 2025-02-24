import * as React from 'react';
import Popover from '@mui/material/Popover';

export default function BasicPopover() {
  const [anchorEl, setAnchorEl] = React.useState(null);

  const handleClick = (event) => {
    setAnchorEl(event.currentTarget);
  };

  const handleClose = () => {
    setAnchorEl(null);
  };

  const open = Boolean(anchorEl);
  const id = open ? 'google-apps-popover' : undefined;

  // Lista de aplicaciones (puedes agregar más)
  const apps = [
    { name: 'Gmail', icon: '/src/assets/gmail.png', link: 'https://mail.google.com/' },
    { name: 'Analytics', icon: '/src/assets/google-analytics.png', link: 'https://developers.google.com/analytics?hl=es ' },
    { name: 'Drive', icon: '/src/assets/google-drive.png', link: 'https://drive.google.com/' },
    { name: 'Maps', icon: '/src/assets/google-maps.png', link: 'https://www.google.com/maps' },
    { name: 'Pay', icon: '/src/assets/google-pay.png', link: 'https://myaccount.google.com/payments-and-subscriptions' },
    { name: 'Voice', icon: '/src/assets/google-voice.png', link: 'https://voice.google.com/' },
    { name: 'Google', icon: '/src/assets/google.png', link: 'https://google.com/' },
    { name: 'Meet', icon: '/src/assets/meet.png', link: 'https://meet.google.com/landing' },
  ];

  return (
    <div>


      <img aria-describedby={id} variant="contained" onClick={handleClick}
          className='rounded-full overflow-hidden hover:bg-zinc-100 p-1.5'
          src="https://ssl.gstatic.com/gb/images/bar/al-icon.png" ></img>

      <Popover
        id={id}
        open={open}
        anchorEl={anchorEl}
        onClose={handleClose}
        anchorOrigin={{
          vertical: 'bottom',
          horizontal: 'left',
        }}
        transformOrigin={{
          vertical: 'top',
          horizontal: 'center',
        }}
      >
        <div className='grid grid-cols-3 gap-4 p-4'>
          {apps.map((app, index) => (
            <div key={index}>
              <div className='flex flex-col items-center w-20 h-20 rounded-xl hover:bg-gray-200'
                onClick={() => window.open(app.link, '_blank')}
              >
                <img src={app.icon} alt={app.name} className='w-14 h-14 p-3'/>
                <div variant="body2">{app.name}</div>
              </div>
            </div>
          ))}
        </div>
      </Popover>
    </div>
  );
}
