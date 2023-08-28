package org.factoriaf5.EventsOnline.models;
// import java.sql.Date;
import java.time.LocalDateTime;

import jakarta.persistence.Column;
import jakarta.persistence.Entity;
import jakarta.persistence.GeneratedValue;
import jakarta.persistence.GenerationType;
import jakarta.persistence.Id;
import jakarta.persistence.OneToOne;
import jakarta.persistence.Table;
@Entity
@Table(name="events")
public class OnlineEvent {
    @Id @GeneratedValue(strategy=GenerationType.IDENTITY) @Column(name="id")
    private Long id;
    private String title;
    private LocalDateTime date;
    private Long max_participants;
    @Column(length = 2000)
    private String description;
    private String img_url;
    private String type;
    private String state;

    public OnlineEvent(){};
    public OnlineEvent(String title, Long max_participants, String description, String img_url, LocalDateTime date){
        this.title = title;
        this.max_participants = max_participants;
        this.description = description;
        this.img_url = img_url;
        this.date = date;
    }

    public String getType() {
        return type;
    }
    public void setType(String type) {
        this.type = type;
    }
    public String getState() {
        return state;
    }
    public void setState(String state) {
        this.state = state;
    }
   
    public Long getId() {
        return id;
    }
    public void setId(Long id) {
        this.id = id;
    }
    public String getTitle() {
        return title;
    }
    public void setTitle(String title) {
        this.title = title;
    }
    public Long getMax_participants() {
        return max_participants;
    }
    public void setMax_participants(Long max_participants) {
        this.max_participants = max_participants;
    }
    public String getDescription() {
        return description;
    }
    public void setDescription(String description) {
        this.description = description;
    }
    public String getImg_url() {
        return img_url;
    }
    public void setImg_url(String img_url) {
        this.img_url = img_url;
    }
    public LocalDateTime getDate() {
        return date;
    }
    public void setDate(LocalDateTime date) {
        this.date = date;
    }
    @OneToOne(mappedBy = "onlineEvent")
    private Slider slider;
   
    
}
