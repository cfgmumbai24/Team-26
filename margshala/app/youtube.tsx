import React, { useState, useEffect } from 'react';
import { View, Text, TextInput, Button, FlatList, Image, StyleSheet, TouchableOpacity, Linking } from 'react-native';
import axios from 'axios';
import { useLocalSearchParams } from 'expo-router';

type Thumbnail = {
  url: string;
  width: number;
  height: number;
};

type Snippet = {
  title: string;
  thumbnails: {
    default: Thumbnail;
  };
};

type Video = {
  id: {
    videoId: string;
  };
  snippet: Snippet;
};

const youtube = () => {
  const [query, setQuery] = useState<string>('');
  const [videos, setVideos] = useState<Video[]>([]);
  const { category } = useLocalSearchParams<{ category: string }>();

  const API_KEY = process.env.EXPO_PUBLIC_API_KEY
  const YOUTUBE_API_URL = 'https://www.googleapis.com/youtube/v3/search';

  useEffect(() => {
    if (category) {
      fetchVideos(category);
    }
  }, [category]);

  const fetchVideos = async (searchQuery: string) => {
    try {
      const response = await axios.get(YOUTUBE_API_URL, {
        params: {
          part: 'snippet',
          maxResults: 10,
          q: searchQuery,
          key: API_KEY,
        },
      });
      setVideos(response.data.items);
    } catch (error) {
      console.error('Error fetching YouTube videos:', error);
    }
  };

  const openYouTubeApp = (videoId: string) => {
    const url = `vnd.youtube://${videoId}`;
    Linking.canOpenURL(url)
      .then((supported) => {
        if (supported) {
          return Linking.openURL(url);
        } else {
          return Linking.openURL(`https://www.youtube.com/watch?v=${videoId}`);
        }
      })
      .catch((err) => console.error('Error opening YouTube:', err));
  };

  const renderItem = ({ item }: { item: Video }) => (
    <TouchableOpacity onPress={() => openYouTubeApp(item.id.videoId)} style={styles.videoContainer}>
      <Image source={{ uri: item.snippet.thumbnails.default.url }} style={styles.thumbnail} />
      <Text style={styles.title}>{item.snippet.title}</Text>
    </TouchableOpacity>
  );

  return (
    <View style={styles.container}> 
      <FlatList
        data={videos}
        renderItem={renderItem}
        keyExtractor={(item) => item.id.videoId}
      />
    </View>
  );
};

const styles = StyleSheet.create({
  container: {
    flex: 1,
    padding: 16,
    backgroundColor: '#fff',
  },
  
  videoContainer: {
    flexDirection: 'column',
    marginBottom: 0,
    alignItems: 'center',
  },
  thumbnail: {
    width: 200,
    height: 150,
    marginRight: 10,
    borderRadius : 10,
  },
  title: {
    flex: 1,
    fontSize: 16,
    marginBottom : 30
  },
});

export default youtube;

