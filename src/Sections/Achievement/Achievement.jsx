

export default function Achievement() {

  const achievements = [
    {
      year: '2022',
      description: 'Lorem ipsum dolor sit amet, consectetur adipiscing elit. Sed quis nisi vel nulla consequat euismod non vel eros. Donec vel ipsum id tellus condimentum ultricies.',
      imgSrc: '', // Add your image URL here
      imgAlt: 'certificate',
    },
    {
      year: '2022',
      description: 'Lorem ipsum dolor sit amet, consectetur adipiscing elit. Sed quis nisi vel nulla consequat euismod non vel eros. Donec vel ipsum id tellus condimentum ultricies.',
      imgSrc: '', // Add your image URL here
      imgAlt: 'certificate',
    },
  ];

  return (
    <div className="w-9/12 mx-auto">
      <h3 className="text-2xl font-medium pb-5 border-b">Work Experience & Achievements</h3>
      {achievements.map((achievement, index) => (
        <div key={index} className="grid grid-cols-5 items-center py-2 border-b">
          <h4>{achievement.year}</h4>
          <p className="col-span-2">{achievement.description}</p>
          <img className="col-span-2 justify-self-end h-32 bg-slate-300 w-8/12" src={achievement.imgSrc} alt={achievement.imgAlt} />
        </div>
      ))}
    </div>
  );
}
