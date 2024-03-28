 import profile from'../../assets/images/profile.png'

const Header = () => {
    return (
        <div className='flex justify-between items-center p-5 border-b-2'>
            <h1 className='text-2xl   font-extrabold'>Daily project</h1>
            <img src={profile} alt="" />
        </div>
    );
};

export default Header;